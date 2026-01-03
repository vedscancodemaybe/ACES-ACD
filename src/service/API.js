import axios from "axios";

const uri = "192.168.1.6";
const BASE_URL = `http://${uri}:5000`;

var Endpoint = {
  Blog: "/blog",
  Nodemailer: "/nodemailer",
  Contact: "/contact",
};

const API_REQ = axios.create({
  baseURL: BASE_URL,
});

const FetchRes = (collection, q) => {
  if (q) {
    API_REQ.get(`/${collection}/${q}`);
  } else {
    API_REQ.get(`/${collection}/`);
  }
};

const ContactPost = (data) => API_REQ.post(`${Endpoint.Contact}/submit`, data);
const BlogPost = (data) => API_REQ.post(`${Endpoint.Blog}/create`, data);

const NodeMailer = (data) => {
  API_REQ.post(`${Endpoint.Nodemailer}/registration`, data);
};

// console.log(FetchRes)

export { FetchRes, ContactPost, BlogPost, NodeMailer };
