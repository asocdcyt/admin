import User from "../models/Users";
import Curse from "../models/Curse";
import Request from "../models/Request";

export const data = async (req, res) => {
    try {
        res.render("admin/data", { title: "Data"});
    } catch (error) {
        console.log(error);
    }
};

export const jornadasPage = async (req, res) => {
    try {
        const allData = await Request.find().sort({ date: "desc" })
        .lean();
        const numOfDocs = await Request.estimatedDocumentCount(numOfDocs);
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const numOfDocsPen = await Request.find({status: sPe}).count();
        const numOfDocsCon = await Request.find({status: sCo}).count();
        const numOfDocsRech = await Request.find({status: sRe}).count();
        res.render("admin/jornadas", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const curses = async (req, res) => {
    try {
        const allData = await Curse.find().sort({ date: "desc" })
        .lean();
        const numOfDocs = await Curse.estimatedDocumentCount(numOfDocs);
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const numOfDocsPen = await Curse.find({status: sPe}).count();
        const numOfDocsCon = await Curse.find({status: sCo}).count();
        const numOfDocsRech = await Curse.find({status: sRe}).count();
        res.render("admin/curses", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const pendient = async (req, res) => {
    try {
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const allData = await Request.find({status: sPe}).sort({ date: "desc" })
        .lean();
        const numOfDocs = await Request.estimatedDocumentCount(numOfDocs);
        const numOfDocsPen = await Request.find({status: sPe}).count();
        const numOfDocsCon = await Request.find({status: sCo}).count();
        const numOfDocsRech = await Request.find({status: sRe}).count();
        res.render("admin/data", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const curseDesingGraphic = async (req, res) => {
    try {
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const sC1 = "Diseño Gráfico: Fácil-Intermedio"
        const sC2 = "Diseño y Gestión de Branding Personal"
        const sC3 = "Photoshop Desde Cero: Principios De La Edición Digital"
        const allData = await Curse.find({curse: sC1}).sort({ date: "desc" })
        .lean();
        const numOfDocs = await Curse.find({curse: sC1}).count();
        const numOfDocsPen = await Curse.find({curse: sC1, status: sPe}).count();
        const numOfDocsCon = await Curse.find({curse: sC1, status: sCo}).count();
        const numOfDocsRech = await Curse.find({curse: sC1, status: sRe}).count();
        res.render("admin/curses", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};
export const curseBranding = async (req, res) => {
    try {
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const sC1 = "Diseño Gráfico: Fácil-Intermedio"
        const sC2 = "Diseño y Gestión de Branding Personal"
        const sC3 = "Photoshop Desde Cero: Principios De La Edición Digital"
        const allData = await Curse.find({curse: sC2}).sort({ date: "desc" })
        .lean();
        const numOfDocs = await Curse.find({curse: sC2}).count();
        const numOfDocsPen = await Curse.find({curse: sC2, status: sPe}).count();
        const numOfDocsCon = await Curse.find({curse: sC2, status: sCo}).count();
        const numOfDocsRech = await Curse.find({curse: sC2, status: sRe}).count();
        res.render("admin/curses", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const cursePhotoshop = async (req, res) => {
    try {
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const sC1 = "Diseño Gráfico: Fácil-Intermedio"
        const sC2 = "Diseño y Gestión de Branding Personal"
        const sC3 = "Photoshop Desde Cero: Principios De La Edición Digital"
        const allData = await Curse.find({curse: sC3}).sort({ date: "desc" })
        .lean();
        const numOfDocs = await Curse.find({curse: sC3}).count();
        const numOfDocsPen = await Curse.find({curse: sC3, status: sPe}).count();
        const numOfDocsCon = await Curse.find({curse: sC3, status: sCo}).count();
        const numOfDocsRech = await Curse.find({curse: sC3, status: sRe}).count();
        res.render("admin/curses", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const pendientCurse = async (req, res) => {
    try {
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const allData = await Curse.find({status: sPe}).sort({ date: "desc" })
        .lean();
        const numOfDocs = await Curse.estimatedDocumentCount(numOfDocs);
        const numOfDocsPen = await Curse.find({status: sPe}).count();
        const numOfDocsCon = await Curse.find({status: sCo}).count();
        const numOfDocsRech = await Curse.find({status: sRe}).count();
        res.render("admin/curses", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const confirm = async (req, res) => {
    try {
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const allData = await Request.find({status: sCo}).sort({ date: "desc" })
        .lean();
        const numOfDocs = await Request.estimatedDocumentCount(numOfDocs);
        const numOfDocsPen = await Request.find({status: sPe}).count();
        const numOfDocsCon = await Request.find({status: sCo}).count();
        const numOfDocsRech = await Request.find({status: sRe}).count();
        res.render("admin/data", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const confirmCurse = async (req, res) => {
    try {
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const allData = await Curse.find({status: sCo}).sort({ date: "desc" })
        .lean();
        const numOfDocs = await Curse.estimatedDocumentCount(numOfDocs);
        const numOfDocsPen = await Curse.find({status: sPe}).count();
        const numOfDocsCon = await Curse.find({status: sCo}).count();
        const numOfDocsRech = await Curse.find({status: sRe}).count();
        res.render("admin/curses", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const rejected = async (req, res) => {
    try {
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const allData = await Request.find({status: sRe}).sort({ date: "desc" })
        .lean();
        const numOfDocs = await Request.estimatedDocumentCount(numOfDocs);
        const numOfDocsPen = await Request.find({status: sPe}).count();
        const numOfDocsCon = await Request.find({status: sCo}).count();
        const numOfDocsRech = await Request.find({status: sRe}).count();
        res.render("admin/data", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const rejectedCurse = async (req, res) => {
    try {
        const sPe = "PENDIENTE"
        const sCo = "CONFIRMADO"
        const sRe = "RECHAZADO"
        const allData = await Curse.find({status: sRe}).sort({ date: "desc" })
        .lean();
        const numOfDocs = await Curse.estimatedDocumentCount(numOfDocs);
        const numOfDocsPen = await Curse.find({status: sPe}).count();
        const numOfDocsCon = await Curse.find({status: sCo}).count();
        const numOfDocsRech = await Curse.find({status: sRe}).count();
        res.render("admin/curses", { allData, title: "Admin", numOfDocs, numOfDocsPen, numOfDocsCon, numOfDocsRech });
    } catch (error) {
        console.log(error);
    }
};

export const papers = async (req, res) => {
    try {
        const allData = await Request.find().sort({ date: "desc" })
        .lean();
        const ptrue = true;
        const numOfDocsP1 = await Request.find({ponencia1: ptrue}).count();
        const numOfDocsP2 = await Request.find({ponencia2: ptrue}).count();
        const numOfDocsP3 = await Request.find({ponencia3: ptrue}).count();
        const numOfDocsP4 = await Request.find({ponencia4: ptrue}).count();
        const numOfDocsP5 = await Request.find({ponencia5: ptrue}).count();
        const numOfDocsP6 = await Request.find({ponencia6: ptrue}).count();
        const numOfDocsP7 = await Request.find({ponencia7: ptrue}).count();
        res.render("admin/papers", { allData, title: "Listado de Ponencias", numOfDocsP1, numOfDocsP2, numOfDocsP3, numOfDocsP4, numOfDocsP5, numOfDocsP6, numOfDocsP7 });
    } catch (error) {
        console.log(error);
    }
};

export const list1 = async (req, res) => {
    try {
        const allData = await Request.find({ponencia1: true}).sort({ date: "desc" })
        .lean();
        const numOfDocsP1 = await Request.find({ponencia1: true}).count();
        res.render("admin/papers/list-1", { allData, title: "Listado 1", numOfDocsP1 });
    } catch (error) {
        console.log(error);
    }
};

export const list2 = async (req, res) => {
    try {
        const allData = await Request.find({ponencia2: true}).sort({ date: "desc" })
        .lean();
        const numOfDocsP2 = await Request.find({ponencia2: true}).count();
        res.render("admin/papers/list-2", { allData, title: "Listado 2", numOfDocsP2 });
    } catch (error) {
        console.log(error);
    }
};

export const list3 = async (req, res) => {
    try {
        const allData = await Request.find({ponencia3: true}).sort({ date: "desc" })
        .lean();
        const numOfDocsP3 = await Request.find({ponencia3: true}).count();
        res.render("admin/papers/list-3", { allData, title: "Listado 3", numOfDocsP3 });
    } catch (error) {
        console.log(error);
    }
};

export const list4 = async (req, res) => {
    try {
        const allData = await Request.find({ponencia4: true}).sort({ date: "desc" })
        .lean();
        const numOfDocsP4 = await Request.find({ponencia4: true}).count();
        res.render("admin/papers/list-4", { allData, title: "Listado 4", numOfDocsP4 });
    } catch (error) {
        console.log(error);
    }
};

export const list5 = async (req, res) => {
    try {
        const allData = await Request.find({ponencia5: true}).sort({ date: "desc" })
        .lean();
        const numOfDocsP5 = await Request.find({ponencia5: true}).count();
        res.render("admin/papers/list-5", { allData, title: "Listado 5", numOfDocsP5 });
    } catch (error) {
        console.log(error);
    }
};

export const list6 = async (req, res) => {
    try {
        const allData = await Request.find({ponencia6: true}).sort({ date: "desc" })
        .lean();
        const numOfDocsP6 = await Request.find({ponencia6: true}).count();
        res.render("admin/papers/list-6", { allData, title: "Listado 6", numOfDocsP6 });
    } catch (error) {
        console.log(error);
    }
};

export const list7 = async (req, res) => {
    try {
        const allData = await Request.find({ponencia7: true}).sort({ date: "desc" })
        .lean();
        const numOfDocsP7 = await Request.find({ponencia7: true}).count();
        res.render("admin/papers/list-7", { allData, title: "Listado 7", numOfDocsP7 });
    } catch (error) {
        console.log(error);
    }
};

export const deleteNoteGET = async (req, res) => {
    try {
        const dash = await Request.findById(req.params.id).lean();
        res.render("admin/delete", { dash, title: "Eliminar"});
    } catch (error) {
        console.log(error);
    }
};

export const deleteNoteGETCurse = async (req, res) => {
    try {
        const dash = await Curse.findById(req.params.id).lean();
        res.render("admin/delete-curse", { dash, title: "Eliminar"});
    } catch (error) {
        console.log(error);
    }
};

export const deleteNote = async (req, res) => {
    await Request.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Cliente eliminado con éxito.");
    res.redirect("/data");
  };

  export const deleteNoteCurse = async (req, res) => {
    await Curse.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Cliente eliminado con éxito.");
    res.redirect("/curses");
  };

export const view = async (req, res) => {
    try {
        const dash = await Request.findById(req.params.id).lean();
        res.render("admin/view", { dash, title: "Administrar" });
    } catch (error) {
        console.log(error);
    }
};

export const viewCurse = async (req, res) => {
    try {
        const dash = await Curse.findById(req.params.id).lean();
        res.render("admin/view-curses", { dash, title: "Administrar" });
    } catch (error) {
        console.log(error);
    }
};

export const edit = async (req, res) => {
    try {
        const dash = await Request.findById(req.params.id).lean();
        res.render("admin/edit", { dash, title: "Editar Solicitud" });
    } catch (error) {
        console.log(error);
    }
};

export const editCurse = async (req, res) => {
    try {
        const dash = await Curse.findById(req.params.id).lean();
        res.render("admin/edit-curse", { dash, title: "Editar Solicitud" });
    } catch (error) {
        console.log(error);
    }
};

export const editUpdate = async (req, res) => {
    const { status } = req.body;
    await Request.findByIdAndUpdate(req.params.id, {status});
    req.flash("success_msg", "Se han actualizado los datos correctamente.");
    res.redirect("/data");
};

export const editUpdateCurse = async (req, res) => {
    const { status } = req.body;
    await Curse.findByIdAndUpdate(req.params.id, {status});
    req.flash("success_msg", "Se han actualizado los datos correctamente.");
    res.redirect("/curses");
};