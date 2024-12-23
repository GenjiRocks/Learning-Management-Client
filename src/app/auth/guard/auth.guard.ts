import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

export const authGuard: CanActivateFn = (route, state) => {


  const router = inject(Router);
  const authService = inject(StudentsService);

  // Check for authentication
  const token = sessionStorage.getItem('token');
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // Check for admin-specific access
  const role = authService.getRole();
  if (role !== 'admin') {
    router.navigate(['/studentdashboard']);
    return false;
  }

  return true;
};
