import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
        // type: String,
        // maxLength: 100
    },
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;