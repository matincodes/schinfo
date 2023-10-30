export function isDateOfBirthValid(dateOfBirth) {
    const currentDate = new Date();
        const inputDate = new Date(dateOfBirth);
        const age = currentDate.getFullYear() - inputDate.getFullYear();
      
        if (age < 21) {
          return false
        }

        return true
  }