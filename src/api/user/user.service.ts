// import { mongoService } from "../../util/mongo.service";

const collection = "users";

const service = {

    getAll: (next) => {
        // mongoService.getDb(function (err, db) {
        //     // if (err) { return next(err, null); }

        //     db.collection(collection).find().toArray(function(err2, docs) {
        //         next(null, docs);
                next(null, [{name: "user1"}]);
        //     });

        // });
    }

    // // ---------- CRUD ----------
    // getById: function (id, next) {
    //     // console.log(555);
    //     mongoService.getById(collection, id, next);
    // },
};

export default service;
