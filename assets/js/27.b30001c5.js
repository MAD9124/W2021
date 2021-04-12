(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{504:function(t,e,i){"use strict";i.r(e);var a=i(42),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",[i("span",{staticClass:"week"},[t._v("JWT Authentication")]),t._v(" "),i("br"),t._v(" "),i("span",{staticClass:"title"},[t._v("Assignment 3")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("Due before our week 10 class.")]),t._v(" "),i("p",[t._v("Counts for 10% of your final grade.")])]),t._v(" "),i("h2",{attrs:{id:"the-brief"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-brief"}},[t._v("#")]),t._v(" The brief")]),t._v(" "),i("p",[t._v("This is the third of three take home assignments related to building a backend web service to support a simple class list application called "),i("em",[t._v("cListR")]),t._v(".")]),t._v(" "),i("p",[t._v("In the previous assignments you built the base for the "),i("em",[t._v("cListR")]),t._v(" RESTful API using Node.js, the Express framework and MongoDB. For this assignment you will enhance that foundation with JWT based authentication.")]),t._v(" "),i("p",[t._v("In addition to correctly implementing all of the requirements from the previous assignment. The application will implement the following.")]),t._v(" "),i("h2",{attrs:{id:"core-requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#core-requirements"}},[t._v("#")]),t._v(" Core Requirements")]),t._v(" "),i("ol",[i("li",[t._v("Create a new "),i("code",[t._v("/auth")]),t._v(" router module that will support")])]),t._v(" "),i("ul",[i("li",[t._v("creating new users")]),t._v(" "),i("li",[t._v("authenticating a user")]),t._v(" "),i("li",[t._v("retrieving the currently logged-in user")])]),t._v(" "),i("p",[t._v("Make sure to redact the user's password.")]),t._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[i("p",[t._v("The user schema should have the following properties:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Max Length")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Default")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("firstName")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("64")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("lastName")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("64")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("email")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("512")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("password")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("70")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("isAdmin")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}}),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])])]),t._v(" "),i("li",[i("p",[t._v("All API routes for the "),i("em",[t._v("students")]),t._v(" and "),i("em",[t._v("courses")]),t._v(" resource paths should only be accessible to authenticated users.")])]),t._v(" "),i("li",[i("p",[t._v("All "),i("code",[t._v("POST")]),t._v(", "),i("code",[t._v("PUT")]),t._v(", "),i("code",[t._v("PATCH")]),t._v(", and "),i("code",[t._v("DELETE")]),t._v(" routes for both the "),i("em",[t._v("students")]),t._v(" and "),i("em",[t._v("courses")]),t._v(" resource paths should be limited to authenticated users with the "),i("code",[t._v("isAdmin")]),t._v(" flag set to true.")])]),t._v(" "),i("li",[i("p",[t._v("Record each login attempt in an "),i("code",[t._v("authentication_attempts")]),t._v(" collection in MongoDB. The properties of each attempt document should include:")])])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Max Length")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("username")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("64")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("ipAddress")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("64")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("didSucceed")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("createdAt")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})])])]),t._v(" "),i("p",[i("strong",[t._v("DO NOT record the password or the JWT.")])]),t._v(" "),i("ol",{attrs:{start:"6"}},[i("li",[t._v("Ensure that you write clean and readable code. Pay attention to:")])]),t._v(" "),i("ul",[i("li",[t._v("no runtime errors")]),t._v(" "),i("li",[t._v("consistent 2 space indentation")]),t._v(" "),i("li",[t._v("logical grouping of related code")]),t._v(" "),i("li",[t._v("semantically descriptive names for variables and functions")]),t._v(" "),i("li",[t._v("well organized project folder structure")]),t._v(" "),i("li",[t._v("properly formatted "),i("code",[t._v("package.json")]),t._v(" file\n"),i("ul",[i("li",[t._v("correct project name")]),t._v(" "),i("li",[t._v("your author details")])])])]),t._v(" "),i("h2",{attrs:{id:"logistics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#logistics"}},[t._v("#")]),t._v(" Logistics")]),t._v(" "),i("ul",[i("li",[t._v("Create a new private GitHub repository, called "),i("strong",[t._v("mad9124-w21-a3-jwt-auth")]),t._v(", and import this "),i("a",{attrs:{href:"https://github.com/MAD9124/mad9124-w21-a3-jwt-auth",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub starter repo"),i("OutboundLink")],1),t._v(" to copy it to your own account.")]),t._v(" "),i("li",[t._v("Ensure that your professor is listed as a collaborator on your copy of the repo.")]),t._v(" "),i("li",[t._v("Clone the repo to your laptop.")]),t._v(" "),i("li",[t._v("Build the project on your laptop.")]),t._v(" "),i("li",[t._v("Test each route with Postman.")]),t._v(" "),i("li",[t._v("Make git commits as you complete each requirement")]),t._v(" "),i("li",[t._v("When everything is complete, push the final commit back up to GitHub and submit the GitHub repo's URL on Brightspace.")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("It is a good habit to make a git commit as you complete each logical requirement. This not only tracks your progress, but protects your working code in case you later break it and need to roll back.")])])])}),[],!1,null,null,null);e.default=l.exports}}]);