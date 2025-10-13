import { useState, useEffect } from "react";

export function useABTest(testName: string, variants: string[]) {
  const [variant, setVariant] = useState<string>(variants[0]);

  useEffect(() => {
    // Check if user already has a variant assigned
    const storedVariant = localStorage.getItem(`ab-test-${testName}`);

    if (storedVariant && variants.includes(storedVariant)) {
      setVariant(storedVariant);
    } else {
      // Assign a random variant
      const randomVariant =
        variants[Math.floor(Math.random() * variants.length)];
      setVariant(randomVariant);
      localStorage.setItem(`ab-test-${testName}`, randomVariant);
    }
  }, [testName, variants]);

  return variant;
}
