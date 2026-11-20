FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY RoyalBidz.Server/RoyalBidz.Server.csproj RoyalBidz.Server/
RUN dotnet restore RoyalBidz.Server/RoyalBidz.Server.csproj
COPY . .
RUN dotnet publish RoyalBidz.Server/RoyalBidz.Server.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000
ENTRYPOINT ["dotnet", "RoyalBidz.Server.dll"]
