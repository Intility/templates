
/**
 * User model
 * @typedef {object} User
 * @property {string} username.required - Users username
 * @property {string} password.required - Users password
 * @property {number} age.required - Users age
 * @property {boolean} isGrownUp.required - Is the user above 18 years old?
 * @property {string} createdAt.required - When was the user entity created
*/
export class User {
    username: string;
    password: string;
    age: number;
    isGrownUp: boolean;
    createdAt: Date;
}

/**
 * UserInput model
 * @typedef {object} UserInput
 * @property {string} username.required - Users username
 * @property {string} password.required - Users password
 * @property {number} age.required - Users age
 */
export class UserInput {
    username: string;
    password: string;
    age: number;
}
