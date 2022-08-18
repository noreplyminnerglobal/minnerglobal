import User from "../models/Users";
import Request from "../models/Request";

export const bronce = (req, res) => {
    res.render("dashboard/pay/bronce", {layout:'main_next'});
};
export const plata = (req, res) => {
    res.render("dashboard/pay/plata", {layout:'main_next'});
};
export const oro = (req, res) => {
    res.render("dashboard/pay/oro", {layout:'main_next'});
};
export const zafiro = (req, res) => {
    res.render("dashboard/pay/zafiro", {layout:'main_next'});
};
export const diamante = (req, res) => {
    res.render("dashboard/pay/diamante", {layout:'main_next'});
};
export const platino = (req, res) => {
    res.render("dashboard/pay/platino", {layout:'main_next'});
};

export const rubi = (req, res) => {
    res.render("dashboard/pay/rubi", {layout:'main_next'});
};

export const titanio = (req, res) => {
    res.render("dashboard/pay/titanio", {layout:'main_next'});
};


export const dashboard = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/dashboard", { users });
    } catch (error) {
        console.log(error);
    }
};

export const wallet = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();

        const request = await Request.find({ user: req.user.id })
        .sort({ date: "desc" })
        .lean();

        res.render("dashboard/wallet", { users, request });
    } catch (error) {
        console.log(error);
    }
};

export const referral = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/referral", { users });
    } catch (error) {
        console.log(error);
    }
};

export const reward = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/reward", { users });
    } catch (error) {
        console.log(error);
    }
};

export const market = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/market", { users });
    } catch (error) {
        console.log(error);
    }
};

export const profile = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/profile", { users });
    } catch (error) {
        console.log(error);
    }
};

export const profileUpdate = async (req, res) => {
    const { phone, firstname, lastname, address, city, country, postalcode, wallet, addresswallet, description } = req.body;
    await User.findByIdAndUpdate(req.params.id, {phone, firstname, lastname, address, city, country, postalcode, wallet, addresswallet, description});
    req.flash("success_msg", "Se ha actualizado su perfil correctamente.");
    res.redirect("/profile");
};

export const createRequest = async (req, res, next) => {
    const { plan, phone, hash} = req.body;
    try {
      const request = new Request({ plan, phone, hash});
      request.user = req.user.id;
      await request.save();
      req.flash("success_msg", "Su solicitud ha sido enviada, le enviaremos una notificación al verificar su pago.");
        res.redirect("/wallet");
    } catch (error) {
      return res.render("error", { errorMessage: error.message });
    }
  };