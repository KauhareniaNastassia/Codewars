class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;

    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length
    }
    pageCount() {
        // returns the number of pages
       return Math.ceil(this.itemCount() / this.itemsPerPage)
    }
    pageItemCount(pageIndex) {
        if (pageIndex > this.pageCount()-1 || pageIndex < 0) {
            return -1
        }
        return this.itemsPerPage - Math.ceil((((pageIndex + 1)*this.itemsPerPage) % this.itemCount()) % this.itemsPerPage)
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
    }
    pageIndex(itemIndex) {

        if (itemIndex < 0 || itemIndex > this.itemCount()-1) {
            return -1
        }
        return itemIndex / this.itemsPerPage < 1 ? 0 : Math.floor(itemIndex / this.itemsPerPage)
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
    }
}

let helper = new PaginationHelper(['a','b','c','d','e','f'], 4)
console.log(helper.itemCount())
console.log(helper.pageCount())
console.log(helper.pageItemCount(0))
console.log(helper.pageIndex(4))