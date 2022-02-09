/**
 * UserDto model
 * @typedef {object} UserDto
 * @property {string} username.required - Users username
 * @property {string} password.required - Users password
 * @property {number} age.required - Users age
 * @property {boolean} isGrownUp.required - Is the user above 18 years old?
 * @property {string} createdAt.required - When was the user entity created
*/
export class UserDto {
    username: string;
    password: string;
    age: number;
    isGrownUp: boolean;
    createdAt: string;
}
