(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{418:function(t,e,s){"use strict";s.r(e);var a=s(56),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("p",[t._v("We aim to ensure that how software across "),s("strong",[t._v("alis.exchange")]),t._v(" operates, communicates and integrates is simple and consistent. Whether you are getting results from a model, updating a database or executing trades, all of these actions should feel familiar. This allows you to seamlessly adopt anything across "),s("strong",[t._v("alis.exchange")]),t._v(" without spending hours in obscure documentation and the toil of attempting to integrate it in your code.")]),t._v(" "),s("p",[t._v("What does that experience feel like? In this section, we want to provide you with a few basic concepts and then allow you to experience "),s("strong",[t._v("alis.exchange")]),t._v(" for yourself.")]),t._v(" "),s("h2",{attrs:{id:"definition-first-approach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definition-first-approach"}},[t._v("#")]),t._v(" Definition-first approach")]),t._v(" "),s("p",[s("strong",[t._v("alis.exchange")]),t._v(" leverages a core set of open-source technologies, all certified by the "),s("a",{attrs:{href:"https://www.cncf.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloud Native Computing Foundation"),s("OutboundLink")],1),t._v(". An essential part of how we make "),s("strong",[t._v("alis.exchange")]),t._v(" work is the strict adoption of "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protocol Buffers"),s("OutboundLink")],1),t._v(", also referred to as "),s("em",[t._v("Protobufs")]),t._v(".")]),t._v(" "),s("p",[t._v("From a technical perspective:")]),t._v(" "),s("blockquote",[s("p",[t._v("Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data. "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("What is important from a practical perspective however is that:")]),t._v(" "),s("blockquote",[s("p",[t._v("You "),s("strong",[t._v("define how you want your data to be structured once")]),t._v(", then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages. "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Two things to take note of:")]),t._v(" "),s("ol",[s("li",[t._v("Defining things is the first, essential part of building on "),s("strong",[t._v("alis.exchange")]),t._v(". Everything that you will be working with ("),s("em",[t._v("resources")]),t._v(") and what you will be doing ("),s("em",[t._v("services")]),t._v(") is defined once in a "),s("code",[t._v(".proto")]),t._v(" file.")]),t._v(" "),s("li",[t._v("The definitions of these resources and services are then used to generate source code in the language of your choice to implement, or work with, the resources and services you defined.")])]),t._v(" "),s("p",[t._v("Find out more about Protobufs, their usage and benefits on "),s("strong",[t._v("alis.exchange")]),t._v(" in the "),s("RouterLink",{attrs:{to:"/other-resources/other-resources.html"}},[t._v("supplementary material")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"experience-the-simplicity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#experience-the-simplicity"}},[t._v("#")]),t._v(" Experience the simplicity")]),t._v(" "),s("h3",{attrs:{id:"books-proto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#books-proto"}},[t._v("#")]),t._v(" Books.proto")]),t._v(" "),s("p",[t._v("Let us consider a "),s("code",[t._v("Book")]),t._v(" resource with "),s("em",[t._v("name")]),t._v(", "),s("em",[t._v("display name")]),t._v(", "),s("em",[t._v("authors")]),t._v(" and "),s("em",[t._v("publishers")]),t._v(" as fields. This is defined in a "),s("code",[t._v("books.proto")]),t._v(" file as follows:")]),t._v(" "),s("div",{staticClass:"language-protobuf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The definition of a book resource.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The name of the book.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Format: books/{book}.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field_behavior"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OUTPUT_ONLY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The display name of the book.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" display_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field_behavior"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" REQUIRED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The authors of the book.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" authors "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field_behavior"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" REQUIRED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The publisher of the book")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" publisher "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field_behavior"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" REQUIRED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The builders of this product allows you to list all the books available, "),s("code",[t._v("ListBooks")]),t._v(", and to retrieve the details of a specific book, "),s("code",[t._v("GetBook")]),t._v(". These are also defined in the "),s("code",[t._v("books.proto")]),t._v(" file as part of the "),s("code",[t._v("BooksService")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-protobuf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Book service for foo.br.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BooksService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List all available books.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rpc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListBooks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListBooksRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListBooksResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/resources/books/v1/books"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get a specific book.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rpc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GetBookRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/resources/store/v1/{name=books/*}"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method_signature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Now that we know what resource is available, "),s("code",[t._v("Book")]),t._v(", and what we are able to do with it, "),s("code",[t._v("ListBooks")]),t._v(" and "),s("code",[t._v("GetBook")]),t._v(", we can get practical.")]),t._v(" "),s("h3",{attrs:{id:"run-the-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-example"}},[t._v("#")]),t._v(" Run the example")]),t._v(" "),s("p",[t._v("Experience the simplicity in accessing these methods in any of the supported languages in using one of our preconfigured cloud IDEs:")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Go")]),t._v(" "),s("h4",{attrs:{id:"make-a-request-using-go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-a-request-using-go"}},[t._v("#")]),t._v(" Make a request using Go")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitpod.io#snapshot/c1eafefa-0414-439e-a618-4089e1d50143",target:"_blank"}},[t._v("Preconfigured Go cloud IDE")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open up the terminal (Mac: "),s("code",[t._v("⌘ + j")]),t._v(", Windows: "),s("code",[t._v("ctrl + j")]),t._v(" ).")]),t._v(" "),s("blockquote",[s("p",[t._v("If the terminal is already open run "),s("code",[t._v("$ clear")]),t._v(" to clear the terminal window.")])])]),t._v(" "),s("li",[s("p",[t._v("Make sure you are in the "),s("code",[t._v("playground")]),t._v(" directory.")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" workspace/playground\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Run the code by running the terminal command:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ go run *.go\n")])])]),s("h4",{attrs:{id:"get-a-feel-for-the-alis-exchange-experience"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-a-feel-for-the-alis-exchange-experience"}},[t._v("#")]),t._v(" Get a feel for the "),s("strong",[t._v("alis.exchange")]),t._v(" experience")]),t._v(" "),s("p",[t._v("Interested in trying something for yourself?")]),t._v(" "),s("p",[t._v("We suggest creating your own function and incorporating a request to the "),s("code",[t._v("BooksClient")]),t._v(". Some suggestions of things to try:")]),t._v(" "),s("ul",[s("li",[t._v("Loop through all the books and print out the author.")]),t._v(" "),s("li",[t._v("Get a book and wrangle the response to be printed out in a sentence structure.")]),t._v(" "),s("li",[t._v("Use the response of "),s("code",[t._v("ListBooks")]),t._v(" to make multiple "),s("code",[t._v("GetBook")]),t._v(" requests.")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("R")]),t._v(" "),s("h4",{attrs:{id:"make-a-request-using-r"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-a-request-using-r"}},[t._v("#")]),t._v(" Make a request using R")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitpod.io#snapshot/c858a081-f9e0-4791-9330-606a568df6fd",target:"_blank"}},[t._v("Preconfigured R cloud IDE")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open up the terminal (Mac: "),s("code",[t._v("⌘ + j")]),t._v(", Windows: "),s("code",[t._v("ctrl + j")]),t._v(" ).")]),t._v(" "),s("blockquote",[s("p",[t._v("If the terminal is already open run "),s("code",[t._v("$ clear")]),t._v(" to clear the terminal window.")])])]),t._v(" "),s("li",[s("p",[t._v("Make sure you are in the "),s("code",[t._v("playground")]),t._v(" directory.")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" workspace/playground\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Run the code")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ Rscript booksConsume.r\n")])])]),s("h4",{attrs:{id:"get-a-feel-for-the-alis-exchange-experience-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-a-feel-for-the-alis-exchange-experience-2"}},[t._v("#")]),t._v(" Get a feel for the "),s("strong",[t._v("alis.exchange")]),t._v(" experience")]),t._v(" "),s("p",[t._v("Interested in trying something for yourself?")]),t._v(" "),s("p",[t._v("We suggest creating your own function and incorporating a request to the "),s("code",[t._v("BooksClient")]),t._v(". Some suggestions of things to try:")]),t._v(" "),s("ul",[s("li",[t._v("Loop through all the books and print out the author.")]),t._v(" "),s("li",[t._v("Get a book and wrangle the response to be printed out in a sentence structure.")]),t._v(" "),s("li",[t._v("Use the response of "),s("code",[t._v("ListBooks")]),t._v(" to make multiple "),s("code",[t._v("GetBook")]),t._v(" requests.")])])]),t._v(" "),s("p",[t._v("If you are interested in recreating this example in your own development environment, we suggest that you check out the "),s("RouterLink",{attrs:{to:"/guides/make-your-first-request.html"}},[t._v("Make your first request guide")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("p",[s("strong",[t._v("Ready to join alis.exchange?")]),t._v(" "),s("a",{attrs:{href:"https://alis.exchange/signup",target:"_blank"}},[t._v("Get in touch")]),t._v(".")]),t._v(" "),s("p",[t._v("Already signed up? "),s("RouterLink",{attrs:{to:"/getting-started/command-line-interface.html"}},[t._v("Get your local environment set up")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);