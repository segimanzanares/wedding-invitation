import { useState, type FormEvent } from 'react';

export type AttendanceStatus = 'yes' | 'no';

interface RsvpFormState {
  name: string;
  email: string;
  attending: AttendanceStatus;
  guests: string;
}

const INITIAL_STATE: RsvpFormState = {
  name: '',
  email: '',
  attending: 'yes',
  guests: '',
};

export function useRsvpForm() {
  const [form, setForm] = useState<RsvpFormState>(INITIAL_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function setField<K extends keyof RsvpFormState>(field: K, value: RsvpFormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      window.alert('Por favor complete su nombre y correo.');
      return;
    }
    setIsSubmitted(true);
  }

  return { form, setField, isSubmitted, handleSubmit };
}
