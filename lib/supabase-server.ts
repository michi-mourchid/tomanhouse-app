import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export type Database = {
  public: {
    Tables: {
      participants: {
        Row: {
          id: number;
          name: string | null;
          email: string | null;
          instagram: string | null;
          gender: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name?: string | null;
          email?: string | null;
          instagram?: string | null;
          gender?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string | null;
          email?: string | null;
          instagram?: string | null;
          gender?: string | null;
          created_at?: string;
        };
      };
      events: {
        Row: {
          id: number;
          event_name: string | null;
          date: string | null;
          location: string | null;
          start_time: string | null;
          end_time: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          event_name?: string | null;
          date?: string | null;
          location?: string | null;
          start_time?: string | null;
          end_time?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          event_name?: string | null;
          date?: string | null;
          location?: string | null;
          start_time?: string | null;
          end_time?: string | null;
          created_at?: string;
        };
      };
      participant_events: {
        Row: {
          id: number;
          participant_id: number | null;
          event_id: number | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          participant_id?: number | null;
          event_id?: number | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          participant_id?: number | null;
          event_id?: number | null;
          created_at?: string;
        };
      };
      guests: {
        Row: {
          id: number;
          participant_id: number | null;
          guest_name: string | null;
          guest_instagram: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          participant_id?: number | null;
          guest_name?: string | null;
          guest_instagram?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          participant_id?: number | null;
          guest_name?: string | null;
          guest_instagram?: string | null;
          created_at?: string;
        };
      };
    };
  };
};
