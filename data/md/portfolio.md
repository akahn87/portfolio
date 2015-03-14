The idea behind the site was to use modern tools to create a site that was quick to build, easy to
maintain and frictionless to deploy. To that end I chose simple
[npm scripts tooling](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/),
a Node.js [Hapi](https://github.com/hapijs/hapi) backend and
[Dokku](https://github.com/progrium/dokku) Docker-based deployment to a Digital Ocean VPS via a
[Codeship](https://codeship.com) continuous integration setup.

I'm really pleased with the way it turned out. The code-base is small and easily comprehensible, it
only took me a few days to build and zero-downtime Docker-based deployments to a $5 server are just
a `git push` away!