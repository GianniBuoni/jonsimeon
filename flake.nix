{
  description = "Development Shell for jonsimeon.com";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
    project = "jonsimeon";
    tb = pkgs.writeShellScriptBin "tb" ''
      pnpm turbo $1 --filter=@${project}/$2
    '';
    pnf = pkgs.writeShellScriptBin "pnf" ''
      pnpm --filter @${project}/$1 $2
    '';
    dc = pkgs.writeShellScriptBin "dc" ''
      if [ $1 = "up" ]; then
        case $# in
          2) docker compose --profile $2 up -d ;;
          3) docker compose --profile $2 up $3 -d ;;
          *) docker compose up -d ;;
        esac
      else
        case $# in
          2) docker compose --profile $2 $1 ;;
          3) docker compose --profile $2 $1 $3 ;;
          *) docker compose $1
        esac
      fi
    '';
  in {
    devShells.${system}.default = pkgs.mkShell {
      packages = [tb pnf dc];
      shellHook = ''
        tmux new-session -A -s ${project}
      '';
    };
  };
}
