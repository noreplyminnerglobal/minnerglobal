import User from '../models/Users';

export const renderIndex = (req, res) => {
  res.render("index", {layout:'main_index'});
};
  
export const renderPrivacy = (req, res) => {
  res.render("privacy", {layout:'main_index'});
};
  
export const renderLegal = (req, res) => {
  res.render("legal", {layout:'main_index'});
};

export const renderCookies = (req, res) => {
  res.render("cookies", {layout:'main_index'});
};