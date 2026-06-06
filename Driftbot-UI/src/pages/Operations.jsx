import { Card } from "@mui/material";

export default function Operations() {
  return (
    <div>

      <h1 className="text-5xl font-bold">
        Operations
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Real-time infrastructure pipeline health
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <Card className="p-6">
          <h2 className="font-bold text-xl">
            Blob Storage
          </h2>

          <p className="text-green-600 mt-2">
            Healthy
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="font-bold text-xl">
            Activity Function
          </h2>

          <p className="text-green-600 mt-2">
            Running
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="font-bold text-xl">
            Messaging Queue
          </h2>

          <p className="text-yellow-500 mt-2">
            5 Pending
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="font-bold text-xl">
            Ollama Engine
          </h2>

          <p className="text-green-600 mt-2">
            Active
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="font-bold text-xl">
            Table Storage
          </h2>

          <p className="text-green-600 mt-2">
            Connected
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="font-bold text-xl">
            Notification Service
          </h2>

          <p className="text-green-600 mt-2">
            Healthy
          </p>
        </Card>

      </div>

    </div>
  );
}