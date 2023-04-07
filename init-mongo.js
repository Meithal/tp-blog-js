db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [
        {
            role: "readWrite",
            db: "blog"
        }
    ]
});

db.createCollection("blog");
