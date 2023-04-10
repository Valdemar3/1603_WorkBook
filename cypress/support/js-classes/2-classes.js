class  Comment {
    constructor(text) {
        this.text = text;
        this.likesQuantity = 0
    }

    addlike() {
        this.likesQuantity +=1; // or this.likesQunatity = this.likesQunatity + 1
    }

    static mergeCommments (first, second) {
        return `${first} + ${second}`
    }
}

const firstComment = new Comment ('Text 1');
const secondComment = new Comment ('Text 2');

let mergedText = Comment.mergeCommments(firstComment.text, secondComment.text)

//console.log(mergedText)

firstComment.addlike()
console.log(firstComment)