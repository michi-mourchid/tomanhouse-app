-- Initialiser les événements dans la base de données
INSERT INTO public.events (id, event_name, date, location, start_time, end_time) VALUES
(1, 'Ob', '2024-06-28', 'Lieu secret', '18:30:00', '22:50:00'),
(2, 'Driko', '2024-07-12', 'Lieu secret', '18:30:00', '22:50:00'),
(3, 'Fahim', '2024-07-19', 'Lieu secret', '18:30:00', '22:50:00')
ON CONFLICT (id) DO UPDATE SET
  event_name = EXCLUDED.event_name,
  date = EXCLUDED.date,
  location = EXCLUDED.location,
  start_time = EXCLUDED.start_time,
  end_time = EXCLUDED.end_time;
