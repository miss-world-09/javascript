import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";

export default function SpamDetector() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const checkSpam = async () => {
    const response = await fetch("/api/check-spam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Freelancing Spam Detector</h2>
      <Textarea
        placeholder="Paste the message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-4"
      />
      <Button onClick={checkSpam} className="w-full">Check for Spam</Button>
      {result && (
        <Card className="mt-4 p-4">
          <CardContent className="flex items-center">
            {result.isSpam ? (
              <AlertCircle className="text-red-500 mr-2" />
            ) : (
              <AlertCircle className="text-green-500 mr-2" />
            )}
            <span>{result.message}</span>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
