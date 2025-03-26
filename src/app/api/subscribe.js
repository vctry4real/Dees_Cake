export default async function handler(req, res) {
    if (req.method === "POST") {
      const { email } = req.body;
  
      if (!email || !email.includes("@")) {
        return res.status(400).json({ error: "Invalid email" });
      }
  
      try {
        // Add logic to save email (Mailchimp, database, etc.)
        console.log("Subscribed email:", email);
        return res.status(200).json({ message: "Subscribed successfully" });
      } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  