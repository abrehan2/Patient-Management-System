export interface CreateUserParams {
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birth: string;
  gender: Gender;
  address: string;
  occupation: string;
  primaryPhysician: string;
  allergies?: string;
  currentMedication?: string;
  identificationType: string;
  identificationNumber: string;
  identificationDocument: FormData;
}
