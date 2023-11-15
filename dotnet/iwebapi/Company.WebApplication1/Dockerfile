FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS publish
WORKDIR /src

COPY *.csproj .
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine

# if you use databases, these lines need to be uncommented
# RUN apk add --no-cache icu-libs
# ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

# if you depend on timezones, these lines need to be uncommented
# RUN apk add --no-cache tzdata
# ENV TZ=Europe/Oslo

WORKDIR /app
COPY --from=publish /app .

USER app
EXPOSE 8080
ENTRYPOINT ["dotnet", "Company.WebApplication1.dll"]
