import Image from "next/image";
import Link from "next/link";

/**
 * Custom components for rendering Prismic Rich Text content
 * Handles images, embeds, links, and all text formatting
 */
export const richTextComponents = {
  // Paragraph
  paragraph: ({ children }) => (
    <p className="mb-4 text-gray-800 leading-relaxed">{children}</p>
  ),

  // Headings
  heading1: ({ children }) => (
    <h1 className="text-4xl font-bold text-[#054d3b] mt-8 mb-4">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-3xl font-bold text-[#054d3b] mt-8 mb-4">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-2xl font-bold text-[#054d3b] mt-6 mb-3">{children}</h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-xl font-bold text-[#054d3b] mt-6 mb-3">{children}</h4>
  ),
  heading5: ({ children }) => (
    <h5 className="text-lg font-bold text-[#054d3b] mt-4 mb-2">{children}</h5>
  ),
  heading6: ({ children }) => (
    <h6 className="text-base font-bold text-[#054d3b] mt-4 mb-2">{children}</h6>
  ),

  // Lists
  list: ({ children }) => (
    <ul className="list-disc list-inside mb-4 ml-4 space-y-2 text-gray-800">
      {children}
    </ul>
  ),
  oList: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 ml-4 space-y-2 text-gray-800">
      {children}
    </ol>
  ),
  listItem: ({ children }) => <li className="leading-relaxed">{children}</li>,
  oListItem: ({ children }) => <li className="leading-relaxed">{children}</li>,

  // Text formatting
  strong: ({ children }) => (
    <strong className="font-bold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,

  // Links
  hyperlink: ({ node, children }) => {
    const isExternal =
      node.data.url && !node.data.url.startsWith("/") && !node.data.url.startsWith("#");

    if (isExternal) {
      return (
        <a
          href={node.data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0f7f76] hover:text-[#0c5f58] underline font-medium transition-colors"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={node.data.url || "#"}
        className="text-[#0f7f76] hover:text-[#0c5f58] underline font-medium transition-colors"
      >
        {children}
      </Link>
    );
  },

  // Images
  image: ({ node }) => {
    const img = node;
    return (
      <figure className="my-8">
        <Image
          src={img.url}
          alt={img.alt || "Blog image"}
          width={img.dimensions?.width || 800}
          height={img.dimensions?.height || 600}
          className="rounded-lg shadow-md w-full h-auto"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        {img.alt && (
          <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
            {img.alt}
          </figcaption>
        )}
      </figure>
    );
  },

  // Embeds (YouTube, Vimeo, etc.)
  embed: ({ node }) => {
    const embedData = node.oembed;

    // YouTube or Vimeo video
    if (embedData.type === "video") {
      return (
        <div className="my-8">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={embedData.embed_url}
              title={embedData.title || "Embedded video"}
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {embedData.title && (
            <p className="text-center text-sm text-gray-600 mt-2 italic">
              {embedData.title}
            </p>
          )}
        </div>
      );
    }

    // Rich embeds (tweets, etc.)
    if (embedData.html) {
      return (
        <div
          className="my-8 flex justify-center"
          dangerouslySetInnerHTML={{ __html: embedData.html }}
        />
      );
    }

    // Link embeds
    return (
      <div className="my-6 p-4 border-l-4 border-[#0f7f76] bg-gray-50 rounded">
        <a
          href={embedData.url || node.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0f7f76] hover:text-[#0c5f58] font-medium"
        >
          {embedData.title || embedData.url || node.url}
        </a>
        {embedData.description && (
          <p className="text-sm text-gray-600 mt-2">{embedData.description}</p>
        )}
      </div>
    );
  },

  // Preformatted text / Code blocks
  preformatted: ({ node }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm">
      <code>{node.text}</code>
    </pre>
  ),

  // Block quotes
  // Note: Prismic doesn't have native blockquote, but we can style paragraph with specific class
};

export default richTextComponents;
