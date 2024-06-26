import type { AppTheme } from "../styles/theme";

/**
 * Represents a universally unique identifier.
 */
export type UUID = ReturnType<typeof crypto.randomUUID>;

/**
 * Represents a user in the application.
 */
export interface User {
  name: string | null;
  createdAt: Date;
  profilePicture: string | URL | null;
  tasks: Task[];
  categories: Category[];
  colorList: string[];
  settings: AppSettings[];
  theme: AppTheme;
}

/**
 * Represents a task in the application.
 */
export interface Task {
  id: UUID;
  done: boolean;
  pinned: boolean;
  name: string;
  description?: string;
  emoji?: string;
  color: string;
  date: Date;
  deadline?: Date;
  category?: Category[];
  lastSave?: Date;
  sharedBy?: string;
}

/**
 * Represents a category in the application.
 */
export interface Category {
  id: UUID;
  name: string;
  emoji?: string;
  color: string;
}

/**
 * Represents application settings for the user.
 */
export interface AppSettings {
  enableCategories: boolean;
  doneToBottom: boolean;
  enableGlow: boolean;
  appBadge: boolean;
}

/**
 * Represents the props for a component that requires user-related data.
 */
export interface UserProps {
  user: User; // User data
  setUser: React.Dispatch<React.SetStateAction<User>>; // Function to update user data
}
