const {database, User, Client} = require ('./models');

describe("models", () =>{

    beforeAll(async () => {
        await database.sync();
    })
    test("validate", async () =>{
        const user = await User.create({
            name: "Celio",
            email: "celin@uol.com",
            password: "321"
        })

        expect(user).toBeDefined();
        expect(user.id).toBeDefined();
        expect(user.name).toBe("Celio");

        await expect(user.create({
            userId: user.id,
            title: "xxxx",
            subject: "sub01",
            content: "cont01",
        })).resolves.toBeDefined();

 await expect(News.create({})).rejects.toThrow();

    })
});

