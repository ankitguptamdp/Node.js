    const course = await Course.findById(id);
    // This was not working because the id's of the objects were saved as Strings instead of ObjectID
    // For the correction i have gone to the MongoDB Compass and by clicking on the document i have cloned all seven of them.
    // There after i have deleted the original ones.
