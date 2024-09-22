const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.createReview = async (req,res)=>{
    //console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    // console.log(newReview);
    // console.log(req.user);
     await newReview.save();
     await listing.save();

     //console.log("new review saved");
     //res.send("new review saved");
     req.flash("success","New Review Created! ");
     res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req,res)=>{
    let {id,reviewId} = req.params;

    await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success","Review Deleted! ");
    res.redirect(`/listings/${id}`);
};