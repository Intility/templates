# Intility .NET Templates

This is the home for the .NET templates.
The `intilityapi` template is based on the official ASP.NET template.

## Test

To test the templates locally, run the following (replace X.X.X with the `PackageVersion` field in `Intility.Templates.csproj`):

```
dotnet pack -c Release
dotnet new --install bin/Release/Intility.Templates.X.X.X.nupkg
```

You can now test the templates locally by running:

```
dotnet new intilityapi -o MyApi
```

## Release

- Update the `PackageVersion` field in `Intility.Templates.csproj`
- Create a new tag: `git tag dotnet-vX.X.X`
- Push the tag: `git push --tags`

When the tag is pushed, it will trigger a GitHub Action that releases the package to NuGet.
