import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import suspenseRender from '@/test-utils/suspenseRender';
import ContactPage from '../page';
import type { Contact } from '@prisma/client';

vi.mock('@/data/services/getContact', () => {
  return {
    getContact: async () => {
      return {
        avatar: 'https://example.com/avatar.png',
        email: '',
        first: 'Test',
        github: 'testuser',
        last: 'User',
        position: 'Software Developer',
      } as Contact;
    },
  };
});

describe('Contact Page', () => {
  it('renders contact details', async () => {
    suspenseRender(<ContactPage params={{ contactId: '1' }} />);
    expect(await screen.findByText('Software Developer')).toBeInTheDocument();
    expect(await screen.findByText('Test User')).toBeInTheDocument();
  });
});
