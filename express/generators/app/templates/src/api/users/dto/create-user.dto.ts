/**
 * CreateUserDto model
 * @typedef {object} CreateUserDto
 * @property {string} username.required - Users username
 * @property {string} password.required - Users password
 * @property {number} age.required - Users age
 */
export class CreateUserDto {
    username: string;
    password: string;
    age: number;
}
