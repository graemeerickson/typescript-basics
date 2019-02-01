"use strict";
function orderError(error) {
    throw new Error(error);
}
orderError('Something went wrong');
