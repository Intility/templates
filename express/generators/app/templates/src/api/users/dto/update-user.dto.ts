/**
 * UpdateUserDto model
 * @typedef {object} UpdateUserDto
 * @property {string} username - Users username
 * @property {string} password - Users password
 * @property {number} age - Users age
 */
export class UpdateUserDto {
    username?: string;
    password?: string;
    age?: number;
}
