const router = require("express") . Router();
const store = require(" .. /db/store");
const path = require("path");

const store = require("./db/store")
// API Routes
app.get("/api/notes", (req, res) => {
    store.getNotes().then((notes) => {
        return res.status(200).json(notes)
    }).catch((error) => res.status(500).json(error))
})

app.post("/api/notes", (req, res) => {
    store.addNotes(req.body).then((note) => {
        return res.status(200).json(note)
    }).catch((error) => res.status(500).json(error))
})


app.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
    store.removeNotes(noteId)
        .then(() => res.status(204).send()) // Send a 204 (No Content) response on successful deletion
        .catch(error => res.status(500).json(error));
});

// HTML ROUTES
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

    module. exports = router;
