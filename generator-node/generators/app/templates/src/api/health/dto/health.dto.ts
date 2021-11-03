/**
 * ProjectDto model
 * @typedef {object} ProjectDto
 * @property {name} name.required - Name of the project
 * @property {version} version.required - Version of the project
 */
class ProjectDto {
    name: string
    version: string
}

/**
 * HealthDto model
 * @typedef {object} HealthDto
 * @property {nodeVersion} nodeVersion.required - Running node version
 * @property {uptime} uptime.required - Formatted string HH:MM:SS
 * @property {ProjectDto} project.required - Project information defined in package.json file
 */
export class HealthDto {
    nodeVersion: string
    uptime: string
    project: ProjectDto
}
