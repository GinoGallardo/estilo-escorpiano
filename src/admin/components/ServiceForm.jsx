import { useState, useEffect, useCallback} from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import ServicesCard from "../../components/LandingSection/ServicesSection/ServicesCard";

function ServiceForm() {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [icon, setIcon] = useState("");
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

  const servicesCollection = collection(db, "services"); // colección en Firestore

  // Leer servicios de Firebase
  const fetchServices = useCallback(async () => {
    const data = await getDocs(servicesCollection);
    setServices(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  }, [servicesCollection]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  // Agregar nuevo servicio
  const handleAdd = async (e) => {
    e.preventDefault();
    let imageUrl = "";
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
      console.log("URL subida:", imageUrl);
    }
    await addDoc(servicesCollection, {
      title,
      description,
      icon: icon || "scissors",
      ...(imageUrl && { image: imageUrl }),
    });
    setTitle("");
    setDescription("");
    setIcon("scissors");
    setImageFile(null);
    fetchServices();
  };

  // Editar servicio
  const handleEdit = (service) => {
    setEditingId(service.id);
    setTitle(service.title);
    setDescription(service.description);
    setIcon(service.icon);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let imageUrl = "";
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }
    const serviceDoc = doc(db, "services", editingId);
    await updateDoc(serviceDoc, {
      title,
      description,
      icon: icon || "scissors",
      ...(imageUrl && { image: imageUrl }),
    });
    setEditingId(null);
    setTitle("");
    setDescription("");
    setIcon("scissors");
    setImageFile(null);
    fetchServices();
  };

  // Eliminar servicio
  const handleDelete = async (id) => {
    const serviceDoc = doc(db, "services", id);
    await deleteDoc(serviceDoc);
    fetchServices();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gestionar Servicios</h2>

      <form
        onSubmit={editingId ? handleUpdate : handleAdd}
        className="flex flex-col max-w-lg gap-y-6 mb-6"
      >
        <input
          type="text"
          placeholder="Título del servicio"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 mr-2  bg-white/20 text-white"
        />
        <input
          type="text"
          placeholder="Descripción del servicio"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 mr-2 bg-white/20 text-white"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="border p-2 mr-2 bg-white/20 text-white"
        />
        <input
          type="text"
          placeholder="Icono por defecto"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          className="border p-2 mr-2  bg-white/20 text-white"
        />
        <button
          type="submit"
          className="mx-auto rounded bg-primary/80 hover:bg-primary uppercase font-extrabold tracking-widest text-white px-4 py-2"
        >
          {editingId ? "Actualizar" : "Agregar"}
        </button>
      </form>
      <div className="flex gap-8">
        <ServicesCard
          services={services}
          isDashboard={true}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default ServiceForm;
