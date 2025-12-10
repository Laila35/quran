"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Reminders = ({ leadId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [roleId, setRoleId] = useState(null);
  const [staffData, setStaffData] = useState([]); // State to store staff data

  const fetchReminders = async () => {
    if (!leadId) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/reminders/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ P_REL_ID: leadId, P_REL_TYPE: "Lead" }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch reminders");
      }

      const result = await response.json();
      console.log("Response JSON:", result);

      if (result && result.reminders && Array.isArray(result.reminders)) {
        setData(result.reminders);
      } else {
        console.error("Unexpected response structure:", result);
        setData([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, [leadId]);

  useEffect(() => {
    const getAdminData = async () => {
      const response = await axios.get("/api/admin-info", {
        withCredentials: true,
      });
      console.log("the reponse for admin data is ", response);
      setRoleId(response.data.data.role_id);
    };
    getAdminData();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users/get");
        console.log("user reponse is", response);
        setStaffData(response.data.users); // Store staff data in state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const selectedDate = new Date(formData.get("P_DATE")); // Get the selected date and time
    const currentDate = new Date(); // Get the current date and time

    // Validate that the selected date and time are in the future
    if (selectedDate <= currentDate) {
      toast.error("Please select a future date and time.");
      return; // Stop form submission if validation fails
    }

    const reminderData = {
      P_REL_ID: leadId,
      P_REL_TYPE: "Lead",
      P_DESCRIPTION: formData.get("P_DESCRIPTION"),
      P_DATE: selectedDate,
      P_ISNOTIFIED: 0, // Default value set to 0
      P_STAFF: formData.get("P_STAFF"),
      P_NOTIFY_BY_EMAIL: 0, // Set to 1 if checked, 0 otherwise
      P_CREATOR: roleId, // Use roleId from state
      P_CUSTOMER: null, // Set to null
      P_CONTACT: null, // Set to null
      P_ASSIGNED_TO: null, // Set to null
      P_NOTIFY_BY_SMS_CLIENT: 0, // Set to 1 if checked, 0 otherwise
      P_STARTDATE: new Date(), // Send current date and time in ISO format
    };

    try {
      const response = await fetch("/api/reminders/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reminderData),
      });

      if (!response.ok) {
        throw new Error("Failed to save reminder");
      }

      const result = await response.json();
      toast.success("Reminder added successfully");
      setShowForm(false);
      fetchReminders(); // Refetch reminders to update the list
    } catch (err) {
      setError(err.message);
      toast.error("Failed to add reminder: " + err.message); // Show error toast
    }
  };

  return (
    <div className="p-6 border border-teal-300 rounded-lg bg-white shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-teal-700">Reminders</h2>
        <button aria-label="add"
          className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
          onClick={() => setShowForm(true)}
        >
          Add Reminder
        </button>
      </div>

      {showForm && (
        <div className="mb-4 p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Add New Reminder</h3>
          <form onSubmit={handleSubmit}>
            {/* Hidden Fields for P_REL_ID and P_REL_TYPE */}
            <input type="hidden" name="P_REL_ID" value={leadId} />
            <input type="hidden" name="P_REL_TYPE" value="Lead" />

            {/* Description */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="P_DESCRIPTION"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            {/* Date and Time */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Date and Time
              </label>
              <input
                type="datetime-local" // Changed to datetime-local
                name="P_DATE"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            {/* Staff */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Staff
              </label>
              <select
                name="P_STAFF"
                className="w-full p-2 border rounded-md"
                required
              >
                {staffData.map((staff) => (
                  <option key={staff.staffid} value={staff.staffid}>
                    {`${staff.firstname || ""} ${staff.lastname || ""}`.trim()}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex items-center mt-4">
              <button aria-label="save"
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Save Reminder
              </button>
              <button aria-label="cancel"
                type="button"
                className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p className="text-sm text-gray-500">Loading reminders...</p>
      ) : error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : data.length > 0 ? (
        <div className="overflow-x-auto">
          <p className="text-sm text-gray-500 mt-4">Lead ID: {leadId}</p>
          <table className="w-full border border-teal-300 rounded-md">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Notified</th>
                <th className="px-4 py-2">Staff</th>
                <th className="px-4 py-2">Email Notify</th>
                <th className="px-4 py-2">SMS Notify</th>
                <th className="px-4 py-2">Creator</th>
                <th className="px-4 py-2">Synced</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-teal-50" : "bg-white"}
                >
                  <td className="px-4 py-2 border">{item.P_DESCRIPTION}</td>
                  <td className="px-4 py-2 border">{item.P_STARTDATE}</td>
                  <td className="px-4 py-2 border">{item.P_DATE}</td>
                  <td className="px-4 py-2 border">
                    {item.P_ISNOTIFIED ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 border">{item.P_STAFF}</td>
                  <td className="px-4 py-2 border">
                    {item.P_NOTIFY_BY_EMAIL ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 border">
                    {item.P_NOTIFY_BY_SMS_CLIENT ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 border">{item.P_CREATOR}</td>
                  <td className="px-4 py-2 border">
                    {item.SYNCED ? "✔️" : "❌"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-gray-500">No reminders available.</p>
      )}
    </div>
  );
};

export default Reminders;
