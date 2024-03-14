// Interface for MajorCredits
export interface MajorCredits {
  _majorCreditBrand: void;
  credits: number;
}

// Interface for MinorCredits
export interface MinorCredits {
  _minorCreditBrand: void;
  credits: number;
}

// Function to sum major credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    _majorCreditBrand: void 0,
    credits: subject1.credits + subject2.credits
  };
}

// Function to sum minor credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    _minorCreditBrand: void 0,
    credits: subject1.credits + subject2.credits
  };
}
