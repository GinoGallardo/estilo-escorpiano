import { useCallback, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import CardClientFeedback from "../../components/LandingSection/ClientFeedback/CardClientFeedback";

function FeedbackList() {
  const [feedback, setFeedback] = useState([]);
  const [nameFeedback, setNameFeedback] = useState("");
  const [messageFeedback, setMessageFeedback] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "estilo_escorpiano");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/du37cgojp/image/upload",
        { method: "POST", body: formData }
      );
      const data = await res.json();
      console.log("Cloudinary response:", data);
      return data.secure_url || null;
    } catch (err) {
      console.error("Error subiendo la imagen a Cloudinary:", err);
      return null;
    }
  };

  const FeedbackCollection = collection(db, "feedback");

  // Leer feedback de Firebase
  const fetchFeedback = useCallback(async () => {
    const data = await getDocs(FeedbackCollection);
    setFeedback(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  }, [FeedbackCollection]);

  useEffect(() => {
    fetchFeedback();
  }, [fetchFeedback]);

  // Agregar nuevo feedback
  const handleAdd = async (e) => {
    e.preventDefault();
    let imageUrl = "";

    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
      console.log("URL subida:", imageUrl);
    }

    await addDoc(FeedbackCollection, {
      nameFeedback,
      messageFeedback,
      ...(imageUrl && { image: imageUrl }),
    });

    setNameFeedback("");
    setMessageFeedback("");
    setImageFile(null);
    fetchFeedback();
  };

  // Editar feedback
  const handleEdit = (feedback) => {
    setEditingId(feedback.id);
    setNameFeedback(feedback.nameFeedback);
    setMessageFeedback(feedback.messageFeedback);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let imageUrl = "";

    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }

    const feedbackDoc = doc(db, "feedback", editingId);
    await updateDoc(feedbackDoc, {
      nameFeedback,
      messageFeedback,
      ...(imageUrl && { image: imageUrl }),
    });

    setEditingId(null);
    setNameFeedback("");
    setMessageFeedback("");
    setImageFile(null);
    fetchFeedback();
  };

  // Eliminar feedback
  const handleDelete = async (id) => {
    const feedbackDoc = doc(db, "feedback", id);
    await deleteDoc(feedbackDoc);
    fetchFeedback();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gestionar Feedback</h2>

      <form
        onSubmit={editingId ? handleUpdate : handleAdd}
        className="flex flex-col max-w-lg gap-y-6 mb-6"
      >
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={nameFeedback}
          onChange={(e) => setNameFeedback(e.target.value)}
          required
          className="border p-2 mr-2  bg-white/20 text-white"
        />
        <input
          type="text"
          placeholder="Comentario del cliente"
          value={messageFeedback}
          onChange={(e) => setMessageFeedback(e.target.value)}
          required
          className="border p-2 mr-2 bg-white/20 text-white"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="border p-2 mr-2 bg-white/20 text-white"
        />
        <button
          type="submit"
          className="mx-auto rounded bg-primary/80 hover:bg-primary uppercase font-extrabold tracking-widest text-white px-4 py-2"
        >
          {editingId ? "Actualizar" : "Agregar"}
        </button>
      </form>
      <div className="flex gap-8">
        <CardClientFeedback
          feedback={feedback}
          isDashboard={true}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
export default FeedbackList;
