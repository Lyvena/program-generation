import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface ResultDisplayProps {
  program: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ program }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Program</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{program}</code>
        </pre>
      </CardContent>
    </Card>
  );
};

export default ResultDisplay;