CREATE TABLE visits (id TEXT PRIMARY KEY, created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')), art TEXT, format TEXT, source TEXT, campaign TEXT);
CREATE TABLE signups (email TEXT PRIMARY KEY, name TEXT NOT NULL, price TEXT NOT NULL, visit_id TEXT NOT NULL REFERENCES visits(id), created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')));
CREATE INDEX signups_visit ON signups(visit_id);
