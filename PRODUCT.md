# Product

## Register

brand

## Users

Sara, 5–7 Jahre alt, kann noch nicht lesen. Sie liebt Einhörner und Prinzessinnen. Sie spielt auf einem iPad (Touch, Querformat oder Hochformat), meist allein, zu Hause. Navigation muss vollständig über große Icons, Bilder und Töne funktionieren — Text ist Dekoration, nie Voraussetzung.

## Product Purpose

„Saras Zauberwelt" — eine kreative Spiel-App (PWA, Home-Screen-installierbar, offline-fähig) mit drei Aktivitäten:

1. **Malen** — Zauber-Ausmalbilder (Einhorn, Prinzessin, Schloss …) per Fingertipp mit Funkel-Effekten füllen
2. **Anziehen** — Prinzessin Sara mit Kleidern, Frisuren, Kronen und Accessoires stylen
3. **Zaubergarten** — Blumen pflanzen, gießen, wachsen sehen, Feenstaub sammeln; Einhorn-Belohnung

Erfolg = Sara kann ohne Hilfe navigieren, nichts kaputt machen, und will wiederkommen. Keine Werbung, keine In-App-Käufe, keine externen Links, kein Internet nötig.

## Brand Personality

Verzaubert, sanft, belohnend. Wie ein Bilderbuch über einen Zauberwald in der Abenddämmerung: samtiges Violett, Rosé-Wolken, Goldstaub-Sterne. Jede Berührung antwortet mit Funkeln und einem freundlichen Klang. Nichts ist je „falsch" — es gibt keine Fehlerzustände für das Kind, nur Entdeckungen.

## Anti-references

- Grelle Flash-Game-Ästhetik (Comic-Sans-Chaos, blinkende Buttons, überladene Screens)
- Generische „AI-App": weißer Hintergrund, Karten-Grid, kleine graue Labels
- Ad-verseuchte Kinder-Web-Games mit Popups und Timern
- Alles, was Lesen voraussetzt oder mit Text-Dialogen arbeitet

## Design Principles

1. **Der Finger ist der Zauberstab.** Jede Berührung erzeugt sichtbare Magie (Funkeln, Wachsen, Klang). Touch-Ziele ≥ 64px.
2. **Null Lesen nötig.** Icons + Piktogramme + Klang tragen die gesamte Navigation. Deutsche Wörter (Malen, Anziehen, Garten) sind nur Begleitung.
3. **Kein Scheitern.** Keine Fehler, keine Timer, kein Game Over. Nur Erschaffen und Belohnung.
4. **Drenched Color.** Die Oberfläche IST der Zauberwald — Violett-Verlaufshimmel, Sterne, Goldakzente. Kein weißes App-Chrome.
5. **Sicher & geschlossen.** Offline-first, keine externen Links, kein Datenabfluss, Fortschritt lokal gespeichert.

## Accessibility & Inclusion

- Zielgruppe kann nicht lesen → alles ikonisch + auditiv
- `prefers-reduced-motion` respektieren (Funkeln → sanftes Einblenden)
- Kontrast: Labels ≥ 4.5:1 auf dem Violett-Himmel
- Keine Alerts/Dialoge; große vergebende Touch-Ziele; kein Pinch-Zoom-Frust (viewport fixiert)
