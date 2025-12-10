// components/StickyForm.js
"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import PhoneInput from "react-phone-input-2";
import countriesList from "@/lib/countries.json";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import * as Yup from "yup";
import countries from "i18n-iso-countries";
import { FaEnvelope, FaGlobe, FaRegComment, FaUser } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCountry } from "@/app/context/CountryContext";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

async function getIP() {
  try {
    const res = await fetch(
      `https://ipinfo.io/?token=${process.env.NEXT_PUBLIC_IP_TOKEN}`
    );
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching IP data:", error);
    return null;
  }
}

const StickyForm = () => {
  const [defaultCountry, setDefaultCountry] = useState("");
  const [defaultTimeZone, setDefaultTimeZone] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("");
  const [ip, setIp] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("");
  const { country } = useCountry();
  const router = useRouter();

  const handleMessage = async (data) => {
    try {
      const updatedData = { ...data, COUNTRY: country };
      await axios.post("/api/first-response", updatedData);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const submitContact = async (data, resetForm) => {
    setLoading(true);
    try {
      const payload = {
        FULL_NAME: data.name,
        EMAIL: data.email,
        PHONE_NO: `+${data.phone}`,
        REMARKS: `${data.message}`,
        COUNTRY: data.country,
        TIME_ZONE: data.timezone,
        CURRENCY: data.currency,
        STATE: region,
        LEAD_IP: ip,
          REQUEST_FORM: 9,
      };

      const response = await axios.post(`/api/leadsform`, payload, {});

      setTimeout(() => handleMessage(response.data.data), 0);

      toast.success("Form submitted successfully!");
      resetForm();

      const students = response?.data?.data?.STUDENTS;
      const leadId = response?.data?.data?.id;

      if (Array.isArray(students) && students.length > 0) {
        setTimeout(() => {
          router.push(`/leads/students?id=${leadId}`);
        }, 1000);
      } else {
        setTimeout(() => {
          router.push(`/thank-you?id=${leadId}`);
        }, 1000);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error(
        err?.response?.data?.message || err.message || "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const ipInfo = await getIP();
        if (ipInfo && ipInfo.country) {
          const countryCode = ipInfo.country.toUpperCase();
          const countryName = countries.getName(countryCode, "en");

          const matchedCountry = countriesList.countries.find(
            (country) =>
              country.short_name.toLowerCase() === countryName.toLowerCase()
          );

          if (matchedCountry) {
            setDefaultCountry(matchedCountry.country_id);
            setPhoneCountryCode(countryCode.toLowerCase());
            setIp(ipInfo?.ip);
            setRegion(ipInfo?.region);
            setDefaultTimeZone(ipInfo.timezone);
          }

          fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
              const matchedCountry = data.find(
                (country) =>
                  country.name.common.toLowerCase() ===
                  countryName.toLowerCase()
              );

              if (matchedCountry && matchedCountry.currencies) {
                const currencyCode = Object.keys(matchedCountry.currencies)[0];
                setCurrency(currencyCode);
              } else {
                setCurrency("N/A");
              }
            })
            .catch((error) => console.log(error));
        }
      } catch (error) {
        console.error("Failed to fetch IP information:", error);
      }
    };

    fetchIP();
  }, []);

  return (
    <div className="sticky mx-auto top-7 w-full max-w-[320px]">
      <div className="bg-white rounded-xl  p-4 transition-all duration-300 ">
        <div className="font-semibold text-lg text-teal-600 mb-2 text-center">
          Get Free Trial Class!
        </div>
    

        <Formik
          initialValues={{
            name: "",
            email: "",
            country: defaultCountry || "",
            timezone: defaultTimeZone || "",
            currency: currency || "",
            phone: "",
            message: "",
          }}
          enableReinitialize
          onSubmit={(values, actions) => {
            submitContact(values, actions.resetForm);
            actions.setSubmitting(false);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email().required("Email is required"),
            country: Yup.string(),
            phone: Yup.string().required("Phone number is required"),
            message: Yup.string(),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              setFieldValue,
            } = props;
            return (
              <Form className="space-y-3">
                <div className="flex flex-col gap-3 mb-3">
                  <div className="w-full relative">
                    <FaUser className="absolute text-xs left-3 top-1/2 -translate-y-1/2 text-teal-200" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full pl-9 text-xs py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="w-full relative">
                    <FaEnvelope className="absolute text-xs left-3 top-1/2 -translate-y-1/2 text-teal-200" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full pl-9 py-2 text-xs px-3 rounded-lg bg-gray-50 border border-gray-200 placeholder:text-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-3">
                  <div className="w-full relative">
                    <PhoneInput
                      country={phoneCountryCode || "us"}
                      placeholder="Phone Number"
                      value={values.phone}
                      onChange={(phone) => setFieldValue("phone", phone)}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{
                        width: "100%",
                        paddingTop: "14px",
                        paddingBottom: "14px",
                        borderRadius: "0.5rem",
                        fontSize: "12px",
                        backgroundColor: "#f9fafb",
                        borderColor: "#e5e7eb",
                      }}
                      buttonStyle={{
                        borderRight: "1px solid #d1d1d1",
                        borderTopLeftRadius: "0.5rem",
                        borderBottomLeftRadius: "0.5rem",
                      }}
                    />
                    {errors.phone && touched.phone && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="w-full relative">
                    <FaGlobe className="absolute text-xs left-3 top-1/2 -translate-y-1/2 text-teal-200" />
                    <select
                      name="country"
                      aria-label="Select your country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full pl-9 py-2.5 text-xs px-3 rounded-lg bg-gray-50 border border-gray-200 placeholder:text-gray-500 appearance-none"
                    >
                      <option value="">Select country</option>
                      {countriesList?.countries &&
                      countriesList.countries.length > 0 ? (
                        countriesList.countries.map((item, index) => (
                          <option key={index} value={item?.country_id}>
                            {item?.short_name}
                          </option>
                        ))
                      ) : (
                        <option disabled>No countries available</option>
                      )}
                    </select>
                  </div>
                </div>

                <div className="mb-3 relative">
                  <FaRegComment className="absolute text-xs left-3 top-3 text-teal-200" />
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="2"
                    className="w-full pl-9 py-2 text-xs px-3 rounded-lg bg-gray-50 border border-gray-200 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <button
                    aria-label="submit"
                    type="submit"
                    disabled={loading}
                    className="w-full p-2.5 text-sm font-medium bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg transition-all duration-300 hover:from-teal-600 hover:to-teal-700"
                  >
                    {loading ? "Submitting..." : "Get Free Trial"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default StickyForm;