import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    require: true,
    validate: {
      validator: (value) => {
        const pattern =
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        return pattern.test(value);
      },
    },
  },
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 15,
  },
  password: {
    type: String,
    trim: true,
    require: true,
    validate: {
      validator: (value) => {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return pattern.test(value);
      },
    },
  },
  role: {
    type: String,
    require: false,
    enum: ["user", "admin"],
    default: "user",
  },
  ultimaPublicacion: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
  nombreRGB: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        const pattern =
          /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*\d+(\.\d+)?\s*)?\)$/;
        return pattern.test(value);
      },
    },
  },
  suspendido: {
    type: {
        isSuspendido: {
            type: Boolean,
            default: false
        },
        motivo: {
            type: String,
            minLength: 5,
            maxlength: 40,
            default: ""
        }
    }
  },
  notificaciones: {
    type: [
      {
        tipo: {
          type: String,
          required: true,
          enum: ["comentario", "advertencia", "like"]
        },
        contenido: {
          usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
            required: true,
          },
          texto: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50
          },
          link: {
            type: String,
            required: true,
          },
        },
        fecha: {
          type: mongoose.Schema.Types.Date,
          default: Date.now,
        },
      },
    ],
    default: [],
  },
});

export const Usuario = mongoose.model("usuario", usuarioSchema);
