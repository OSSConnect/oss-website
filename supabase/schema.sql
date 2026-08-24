-- Supabase Schema for OSS Community Website

-- 1. Profiles Table (Linked to Auth Users)
create table public.profiles (
  id uuid references auth.users not null primary key,
  name text,
  role text default 'Member', -- e.g. Core Team, Contributor, Member
  avatar_url text, -- Storage link to member photo
  github_url text,
  linkedin_url text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);

-- 2. Events / Meetings Table
create table public.events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  date timestamp with time zone not null,
  location text,
  image_url text, -- Storage link to meeting photo
  is_past boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.events enable row level security;
create policy "Events are viewable by everyone." on public.events for select using (true);

-- 3. Resources Table
create table public.resources (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  type text not null, -- e.g. Document, Video, Link, Design
  url text not null,
  thumbnail_url text, -- Optional cover image for the resource
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.resources enable row level security;
create policy "Resources are viewable by everyone." on public.resources for select using (true);

-- 4. Projects (Ecosystem) Table
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  repo_url text,
  demo_url text,
  tags text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.projects enable row level security;
create policy "Projects are viewable by everyone." on public.projects for select using (true);

-- Create a storage bucket for public assets (Photos, resources, etc.)
insert into storage.buckets (id, name, public) values ('assets', 'assets', true) ON CONFLICT DO NOTHING;
create policy "Public Access" on storage.objects for select using ( bucket_id = 'assets' );

-- Note: In a real production setup, you would add INSERT/UPDATE/DELETE policies 
-- restricted to authenticated admins. For this template, reading is public.
