import User from '../models/Users';
import Admin from '../models/Admin';
import passport from "passport";

export const renderSignUpForm = (req, res) => res.render("signup", { title: "Registro Admin" });

export const signupPOST = async (req, res) => {
    let errors = [];
    const { validcode, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
      errors.push({ text: "Passwords do not match." });
    }
    if (password.length < 4) {
      errors.push({ text: "Passwords must be at least 4 characters." });
    }
    if (errors.length > 0) {
      res.render("signup", {
        errors,
        validcode,
        email,
        password,
        confirm_password,
      });
    } else {
      // Look for email coincidence
      const emailUser = await Admin.findOne({ email: email });
      if (emailUser) {
        req.flash("error_msg", "El correo electrónico ya está en uso.");
        res.redirect("/signup");
      } else if (process.env.VALID_CODE != validcode){
        req.flash("error_msg", "El código de validación es incorrecto.");
        res.redirect("/signup");
      } else {
        // Saving a New User
        const newUser = new Admin({ validcode, email, password });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash("success_msg", "You are registered.");
        res.redirect("/");
      }
    }
  };

export const renderSigninForm = (req, res) => res.render("index", { title: "Ingreso Admin" });

export const signinPOST = passport.authenticate('local', {
  successRedirect: "/data",
  failureRedirect: "/",
  failureFlash: true,
});

export const logout = (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash("success_msg", "Se ha cerrado su sesión.");
    res.redirect('/');
  });
};
