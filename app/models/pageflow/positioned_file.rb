module Pageflow
  class PositionedFile # rubocop:todo Style/Documentation
    attr_reader :file, :position_x, :position_y

    delegate :thumbnail_url, :perma_id, to: :file

    def initialize(file, position_x = nil, position_y = nil)
      @file = file
      @position_x = position_x.presence || 50
      @position_y = position_y.presence || 50
    end

    def ==(other)
      super ||
        other == file ||
        (other.is_a?(PositionedFile) && other.file == file) ||
        (other.class == file.class && other.id == file.id)
    end

    def to_model
      file
    end

    def self.wrap(file, position_x, position_y)
      file ? new(file, position_x, position_y) : nil
    end

    def self.null
      Null.new
    end

    class Null < PositionedFile # rubocop:todo Style/Documentation
      def initialize
        super(nil)
      end

      def thumbnail_url(*)
        ImageFile.new.attachment.url(*)
      end

      def blank?
        true
      end
    end
  end
end
