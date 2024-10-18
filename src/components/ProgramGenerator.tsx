import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import ResultDisplay from './ResultDisplay';

const ProgramGenerator = () => {
  const [input, setInput] = useState('');
  const [generatedProgram, setGeneratedProgram] = useState('');
  const { toast } = useToast();

  const generateProgram = async (input: string) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    return `Generated program based on: ${input}`;
  };

  const mutation = useMutation({
    mutationFn: generateProgram,
    onSuccess: (data) => {
      setGeneratedProgram(data);
      toast({
        title: "Program Generated",
        description: "Your program has been successfully generated.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to generate program. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(input);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Enter your program requirements..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-[200px]"
        />
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Generating...' : 'Generate Program'}
        </Button>
      </form>
      {generatedProgram && <ResultDisplay program={generatedProgram} />}
    </div>
  );
};

export default ProgramGenerator;