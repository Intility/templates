/**
 * ProjectDto model
 * @typedef {object} ProjectDto
 * @property {string} name.required - Name of the project
 * @property {string} version.required - Version of the project
 */
class ProjectDto {
    name: string
    version: string
}

/**
 * HealthDto model
 * @typedef {object} HealthDto
 * @property {string} nodeVersion.required - Running node version
 * @property {string} uptime.required - Formatted string HH:MM:SS
 * @property {ProjectDto} project.required - Project information defined in package.json file
 */
export class HealthDto {
    nodeVersion: string
    uptime: string
    project: ProjectDto
}
