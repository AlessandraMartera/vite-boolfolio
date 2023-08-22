#### Todo

### Milestone 1
Iniziamo ad occuparci della parte front-end della nostra applicazione: creiamo un nuovo progetto `Vue 3 + Vite` e installiamo `axios`. 
Colleghiamo questo progetto ad una repo separata.


Nel componente principale della nostra `Vue App` facciamo una chiamata API all’endpoint costruito nel progetto Laravel ([[2023-08-21 - Laravel Boolfolio - API#Milestone 1|Milestone 1]]) e recuperiamo tutti i progetti dal nostro `back-end`.
Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.


Creiamo un nuovo componente `ProjectCard`, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.

### Bonus
Gestire la paginazione dei risultati

### Milestone 2
Aggiungere la dipendenza `vue-route@4` al progetto `VueJS`. Creare almeno 2 pagine diverse:
- **home**: dove listare tutti i progetti (eventualmente con le relative pagine)
- **dettagli progetto**: dove sara' possibile leggere tutte le informazioni riguardanti il progetto

Creare inoltre un `header` che sia condiviso da tutte le pagine.
