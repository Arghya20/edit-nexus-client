import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative underline">Blog </span>
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  1. Difference between SQL and NoSQL ?
                </p>
                <p className="text-gray-700">
                  <strong> Ans.</strong> When it comes to choosing a database
                  the biggest decisions is picking a relational (SQL) or
                  non-relational (NoSQL) data structure. While both the
                  databases are viable options still there are certain key
                  differences between the two that users must keep in mind when
                  making a decision. <br />
                  <p>
                    {" "}
                    <strong> Type -</strong> SQL databases are primarily called
                    as Relational Databases (RDBMS); whereas NoSQL database are
                    primarily called as non-relational or distributed database.{" "}
                  </p>
                  <p>
                    {" "}
                    <strong> Structure -</strong>SQL databases are table-based
                    on the other hand NoSQL databases are either key-value
                    pairs, document-based, graph databases or wide-column
                    stores. This makes relational SQL databases a better option
                    for applications that require multi-row transactions such as
                    an accounting system or for legacy systems that were built
                    for a relational structure.{" "}
                  </p>
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  2. What is JWT, and how does it work?{" "}
                </p>
                <p className="text-gray-700">
                  <strong> Ans.</strong> JWTs are digitally signed using either
                  a secret (HMAC) or a public/private key pair (RSA or ECDSA)
                  which safeguards them from being modified by the client or an
                  attacker.
                  <br />
                  JWTs differ from other web tokens in that they contain a set
                  of claims. Claims are used to transmit information between two
                  parties. What these claims are depends on the use case at
                  hand. For example, a claim may assert who issued the token,
                  how long it is valid for, or what permissions the client has
                  been granted.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  3. What is the difference between javascript and NodeJS?
                </p>
                <p className="text-gray-700">
                  <strong> Ans. </strong>
                  JavaScript is a lightweight, cross-platform, interpreted
                  scripting programming language that is primarily used for
                  client-side scripting. It's built into both Java and HTML. On
                  the other hand, Node.js is a server-side scripting language
                  based on the Google Chrome V8 engine. As a result, it's used
                  to build network-centric applications. It is a distributed
                  system that is used for data-intensive real-time applications.{" "}
                  <br />
                  JavaScript is a simple programming language that could be run
                  in any browser that supports the JavaScript Engine. On the
                  other hand, Node.js is a running environment or interpreter
                  for the JavaScript programming language. It needs libraries
                  that may be easily accessed from JavaScript programming to
                  make it more useful. <br />
                  JavaScript can run on any engine, including Firefox's Spider
                  Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a
                  result, JavaScript programming is very simple to create, and
                  any running environment is equivalent to a proper browser. On
                  the other hand, Node.js only supports the V8 engine, which is
                  exclusive to Google Chrome. However, written JavaScript code
                  can run in any environment, regardless of whether it supports
                  the V8 engine.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  4. How does NodeJS handle multiple requests at the same time?{" "}
                </p>
                <p className="text-gray-700">
                  {" "}
                  <strong> Ans. </strong>
                  I understand that Node.js uses a single-thread and an event
                  loop to process requests only processing one at a time (which
                  is non-blocking). But still, how does that work, lets say
                  10,000 concurrent requests. The event loop will process all
                  the requests? Would not that take too long?
                  <br />
                  I can not understand (yet) how it can be faster than a
                  multi-threaded web server. I understand that multi-threaded
                  web server will be more expensive in resources (memory, CPU),
                  but would not it still be faster? I am probably wrong; please
                  explain how this single-thread is faster in lots of requests,
                  and what it typically does (in high level) when servicing lots
                  of requests like 10,000.
                  <br />
                  And also, will that single-thread scale well with that large
                  amount? Please bear in mind that I am just starting to learn
                  Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
